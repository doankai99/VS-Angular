import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-pop-up-management-order',
  templateUrl: './pop-up-management-order.component.html',
  styleUrls: ['./pop-up-management-order.component.less']
})
export class PopUpManagementOrderComponent {
  @Input() public status !: number

  public isOpenDelete = false;
  public isOpenEdit = false;

  public form !: FormGroup;
  public constructor(private authService: AuthService, private toast: ToastrService) {

  }

  public ngOnInit() {
    console.log(this.status);
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

    })
  }

  public updateOrder() {

  }

  public deleteOrder() {

  }
}
