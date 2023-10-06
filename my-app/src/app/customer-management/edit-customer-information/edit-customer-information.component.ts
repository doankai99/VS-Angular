import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() userId !: any;
  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();

  public form !: FormGroup;
  public constructor(private authService: AuthService, private toast: ToastrService) {

  }

  public ngOnInit() {
    console.log(this.userId);

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
    const id = this.userId
    console.log(id);
    this.authService.deleteAccount(id).subscribe((data) => {
      if (data) {
        this.toast.success('Delete user success')
        this.fetchData.emit()
      } else {
        this.toast.error('delete customer false')
      }
      this.toggleFilter()
    })
  }
}
