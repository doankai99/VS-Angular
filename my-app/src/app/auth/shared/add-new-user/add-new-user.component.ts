import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { clone } from 'lodash';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.less']
})
export class AddNewUserComponent {
  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();

  public isOpen = false;
  public showPassword: boolean = false;
  public form !: FormGroup;
  public selectedImageURL: any;

  public constructor() {

  }

  public ngOnInit() {
    this.setForm();
  }

  public toggleDetailUser() {
    this.isOpen = !this.isOpen
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  public setForm() {
    this.form = new FormGroup({
      fileSource: new FormControl(''),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      ward: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
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

  public addNewUser(): void {
    const formData: FormData = new FormData();
    if (this.form.controls['fileSource']?.value) {
      formData.append('image', this.form.controls['fileSource']?.value);
    }
    formData.append('email', this.form.controls['email']?.value);
    formData.append('password', this.form.controls['password']?.value);
    formData.append('firstname', this.form.controls['firstname']?.value);
    formData.append('lastname', this.form.controls['lastname']?.value);
    formData.append('position', this.form.controls['position']?.value);
    formData.append('street', this.form.controls['street']?.value);
    formData.append('ward', this.form.controls['ward']?.value);
    formData.append('district', this.form.controls['district']?.value);
    formData.append('city', this.form.controls['city']?.value);
    formData.append('country', this.form.controls['country']?.value);
    this.fetchData.emit(formData);
    this.toggleDetailUser();
  }
}
