import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-pop-up-management-order',
  templateUrl: './pop-up-management-order.component.html',
  styleUrls: ['./pop-up-management-order.component.less']
})
export class PopUpManagementOrderComponent {

  public isOpenDelete = false;
  public isOpenEdit = false;

  public form !: FormGroup;
  public constructor(private authService: AuthService, private toast: ToastrService) {

  }

  public ngOnInit() {

  }

  public toggleFilter() {
    this.isOpenDelete = !this.isOpenDelete;
    this.isOpenEdit = false;
  }

  public popUpEdit() {
    this.isOpenEdit = !this.isOpenEdit;
    this.isOpenDelete = false;
  }

  public updateOrder() {

  }

  public deleteOrder() {

  }
}
