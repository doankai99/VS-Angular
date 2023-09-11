import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { clone } from 'lodash';
import { GlobalConfig, Toast, ToastrService } from 'ngx-toastr';
import { ListAccountComponent } from 'src/app/auth/list-account/list-account.component';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-filter-management-account',
  templateUrl: './filter-management-account.component.html',
  styleUrls: ['./filter-management-account.component.less']
})
export class FilterManagementAccountComponent {
  public isOpenDelete = false;
  public isOpenEdit = false;
  @Input() public getDetailUser !: any;
  @Input() public userId !: string;
  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();

  public managerAccountComponent !: ListAccountComponent

  public form !: FormGroup;
  public constructor(private authService: AuthService, private toast: ToastrService) {

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
      email: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      position: new FormControl(''),
      street: new FormControl(''),
      ward: new FormControl(''),
      district: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl('')
    })
  };

  public applyFiltering() {
    const params: any = {
      email: this.form.controls['email']?.value,
      firstname: this.form.controls['firstname']?.value,
      lastname: this.form.controls['lastname']?.value,
      position: this.form.controls['position']?.value,
      street: this.form.controls['street']?.value,
      ward: this.form.controls['ward']?.value,
      district: this.form.controls['district']?.value,
      city: this.form.controls['city']?.value,
      country: this.form.controls['country']?.value
    }
    const EditParams = this.clean(params);
    this.updateUser(params)
  }

  public updateUser(params: any) {
    const userId = this.getDetailUser._id
    this.authService.editUser(userId, params).subscribe(reponse => {
      this.toast.success('edit User success full');
      this.fetchData.emit();
    })
  }

  public deleteUser() {
    this.isOpenDelete = !this.isOpenDelete
    const userId = this.getDetailUser._id
    this.authService.deleteAccount(userId).subscribe(() => {
      this.fetchData.emit();
      this.toast.success('Delete user success')
    })
  }

  public clean(param: any) {
    for (const propName in param) {
      if (typeof param[propName] === 'string') {
        param[propName] = param[propName].trim();
      }
      if (param[propName] === null || param[propName] === "") {
        delete param[propName];
      }
    }
    return param;
  }


}
