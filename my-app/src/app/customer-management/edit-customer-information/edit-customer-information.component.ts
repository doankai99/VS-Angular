import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-edit-customer-information',
  templateUrl: './edit-customer-information.component.html',
  styleUrls: ['./edit-customer-information.component.less']
})
export class EditCustomerInformationComponent {
  public isOpenDelete = false;
  public isOpenEdit = false;
  @Input() userId !: string;

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

  public applyFiltering() {

  }

  public updateCustomer() {

  }

  public deleteCustomer() {
    this.authService.deleteAccount(this.userId).subscribe(() => {
      this.toast.success('Delete user success')
    })
  }
}
