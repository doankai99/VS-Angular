import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { OrderService } from 'src/app/order-process/shared/service/order.service';

@Component({
  selector: 'app-pop-up-management-order',
  templateUrl: './pop-up-management-order.component.html',
  styleUrls: ['./pop-up-management-order.component.less']
})
export class PopUpManagementOrderComponent {
  @Input() public defaultStatus !: number;
  @Input() public orderId !: any;
  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();

  public isOpenDelete = false;
  public isOpenEdit = false;

  public form !: FormGroup;
  public constructor(private authService: AuthService, private toast: ToastrService, private orderService: OrderService) {

  }

  public ngOnInit() {
    this.setForm();
  }

  public toggleFilter() {
    this.isOpenDelete = !this.isOpenDelete;
    this.isOpenEdit = false;
  }

  public popUpEdit() {
    this.isOpenEdit = !this.isOpenEdit;
    this.isOpenDelete = false;
  }

  public setForm() {
    this.form = new FormGroup({
      status: new FormControl('', Validators.required),
    })
  }

  public updateOrder() {
    const params = {
      status: this.form.controls['status']?.value,
    }
    this.handleUpdateOrder(params);
  }

  public handleUpdateOrder(param: any) {
    const id = this.orderId
    this.orderService.handleUpdateStatus(id, param).subscribe((data) => {
      if (data.order) {
        this.toast.success(`update order id: ${id} success`)
        this.fetchData.emit()
      } else {
        this.toast.error(`update order id: ${id} false`)
      }
      this.popUpEdit();
    })
  }

  public deleteOrder() {

  }
}
