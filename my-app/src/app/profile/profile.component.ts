import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/shared/auth.service';
import { FormDataServiceService } from '../shared/UI/form-data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {
  public activeTab: string = 'A';
  public form !: FormGroup;
  public userInfo: any;
  public disabledName: boolean = true;
  public userId = localStorage.getItem('id');

  public constructor(private authService: AuthService, private formDataService: FormDataServiceService) { }

  public ngOnInit() {
    this.detailProfile();
  }

  // public setForm() {
  //   this.form = new FormGroup({
  //     firstname: new FormControl({ value: data?.firstname }),
  //     lastname: new FormControl({ value: data?.lastname }),
  //     email: new FormControl({ value: data?.email }),
  //     position: new FormControl({ value: data?.position }),
  //     street: new FormControl({ value: data?.street }),
  //     ward: new FormControl({ value: data?.ward }),
  //     district: new FormControl({ value: data?.district }),
  //     city: new FormControl({ value: data?.city }),
  //     country: new FormControl({ value: data?.country }),
  //   })
  // }

  public editProfileUser(): void {
    const formData: FormData = new FormData();
    this.formDataService.appendIfValue(formData, 'firstname', this.form.controls['firstname']?.value);
    this.formDataService.appendIfValue(formData, 'lastname', this.form.controls['lastname']?.value);
    this.formDataService.appendIfValue(formData, 'email', this.form.controls['email']?.value);
    this.formDataService.appendIfValue(formData, 'position', this.form.controls['position']?.value);
    this.formDataService.appendIfValue(formData, 'street', this.form.controls['street']?.value);
    this.formDataService.appendIfValue(formData, 'street', this.form.controls['ward']?.value);
    this.formDataService.appendIfValue(formData, 'street', this.form.controls['district']?.value);
    this.formDataService.appendIfValue(formData, 'street', this.form.controls['city']?.value);
    this.formDataService.appendIfValue(formData, 'street', this.form.controls['country']?.value);
    this.handleEditProfile(formData)
  }

  public changeDisable() {
    this.disabledName = !this.disabledName
  }

  public detailProfile() {
    const id = this.userId;
    this.authService.detailUser(id).subscribe((data) => {
      this.userInfo = data.message
      console.log(this.userInfo);
    })
  }

  public handleEditProfile(data: any): void {
    const id = this.userId
    this.authService.handleUpdateUser(id, data).subscribe((data) = {

    })
  }
}
