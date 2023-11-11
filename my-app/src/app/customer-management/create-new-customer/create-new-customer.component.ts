import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from "../shared/customer.service";
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import {AddBodyMeasurementsComponent} from "./add-body-measurements/add-body-measurements.component";

@Component({
  selector: 'app-create-new-customer',
  templateUrl: './create-new-customer.component.html',
  styleUrls: ['./create-new-customer.component.less']
})
export class CreateNewCustomerComponent {
  public isOpen: boolean = false;
  public showPassword: boolean = false;
  public activeTab: string = 'A';
  public form !: FormGroup;
  public selectedImageURL: any;
  params: any = {};

  public constructor(private customerService: CustomerService, private toast: ToastrService, private router: Router) { }

  public ngOnInit() {
    this.setForm();
  }

  public toggleDetailUser() {
    this.isOpen = !this.isOpen
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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl(''),
      email: new FormControl('', Validators.required),
      numberPhone: new FormControl('', Validators.required),
      street: new FormControl(''),
      ward: new FormControl(''),
      district: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
    })
  }

  public applyForm(): void {
    const formData: FormData = new FormData();
    if (this.form.controls['fileSource']?.value) {
      formData.append('image', this.form.controls['fileSource']?.value);
    }
    formData.append('email', this.form.controls['email']?.value);
    formData.append('password', this.form.controls['password']?.value);
    formData.append('firstName', this.form.controls['firstName']?.value);
    formData.append('lastnnme', this.form.controls['lastName']?.value);
    formData.append('numberPhone', this.form.controls['numberPhone']?.value);
    formData.append('gender', this.form.controls['gender']?.value);
    formData.append('street', this.form.controls['street']?.value);
    formData.append('ward', this.form.controls['ward']?.value);
    formData.append('district', this.form.controls['district']?.value);
    formData.append('city', this.form.controls['city']?.value);
    formData.append('country', this.form.controls['country']?.value);
    this.updateBasicInformation(formData)
  }

  public updateBasicInformation(params: any) {
    this.customerService.addCustomer(params).subscribe((data) => {
      if (data) {
        this.toast.success('Add new customer success')
        // AddBodyMeasurementsComponent{}
        // this.router.navigateByUrl('/add-body-customer')
      }
    })
  }
  public resetInformation() {

  }
}
