import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-customer',
  templateUrl: './sign-up-customer.component.html',
  styleUrls: ['./sign-up-customer.component.less']
})
export class SignUpCustomerComponent {
  public form !: FormGroup;

  public showPassword: boolean = false;
  public isLoading: boolean = false;

  public customerId: any;
  public selectedImageURL: any;
  constructor(private authService: AuthService, private toast: ToastrService, private router: Router) {

  }

  ngOnInit() {
    this.setForm();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
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

  public setForm() {
    this.form = new FormGroup({
      fileSource: new FormControl(''),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      numberPhone: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      ward: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    })
  }

  public signUpCustomer() {
    const formData: FormData = new FormData();
    if (this.form.controls['fileSource']?.value) {
      formData.append('image', this.form.controls['fileSource']?.value);
    }
    formData.append('email', this.form.controls['email']?.value);
    formData.append('password', this.form.controls['password']?.value);
    formData.append('firstName', this.form.controls['firstName']?.value);
    formData.append('lastName', this.form.controls['lastName']?.value);
    formData.append('numberPhone', this.form.controls['numberPhone']?.value);
    formData.append('gender', this.form.controls['gender']?.value);
    formData.append('street', this.form.controls['street']?.value);
    formData.append('ward', this.form.controls['ward']?.value);
    formData.append('district', this.form.controls['district']?.value);
    formData.append('city', this.form.controls['city']?.value);
    formData.append('country', this.form.controls['country']?.value);
    this.createAccountCustomer(formData);
    console.log(formData);
  }

  public createAccountCustomer(data: any): void {
    this.isLoading = true;
    this.authService.createCustomer(data).subscribe((data) => {
      if (data) {
        this.customerId = data.customer?.id
        this.router.navigateByUrl(`/setting-body-measurement/${data.customer?.id}`)
        this.isLoading = false
        this.toast.success('Create account sucees');
      } else {
        this.toast.error('create account false')
      }
    })
  }
}
