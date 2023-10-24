import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { FormDataServiceService } from 'src/app/shared/UI/form-data-service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent {
  public userId: any;
  public selectedImageURL: any;
  public form !: FormGroup;
  public avatarUser: any;
  constructor(private authService: AuthService, private formDataService: FormDataServiceService) { }

  ngOninit() {
    this.userId = localStorage.getItem('id')
    this.avatarUser = localStorage.getItem('image')
    this.setForm();
  }
  public setForm() {
    this.form = new FormGroup({
      fileSource: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      position: new FormControl(''),
      street: new FormControl(''),
      ward: new FormControl(''),
      district: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
    })
  }
  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // Kiểm tra xem tệp đã chọn có phải là hình ảnh không
      if (file.type.match(/image\/*/) !== null) {
        this.form.patchValue({
          fileSource: file
        });
        this.form.get('fileSource')?.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImageURL = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        console.error('Chọn một tệp hình ảnh.');
      }
    }
  }

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
  public handleEditProfile(data: any): void {
    const id = this.userId
    this.authService.handleUpdateUser(id, data).subscribe((data) = {

    })
  }
}
