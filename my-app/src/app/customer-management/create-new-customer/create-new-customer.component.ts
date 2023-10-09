import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from "../shared/customer.service";
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-new-customer',
  templateUrl: './create-new-customer.component.html',
  styleUrls: ['./create-new-customer.component.less']
})
export class CreateNewCustomerComponent {
  public activeTab: string = 'A';
  public form !: FormGroup;
  params: any = {};

  public constructor(private customerService: CustomerService, private toast: ToastrService, private router: Router) { }

  public ngOnInit() {
    this.setForm();
  }

  public setForm() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl(''),
      email: new FormControl('', Validators.required),
      numberPhone: new FormControl('', Validators.required),
      priceGroup: new FormControl('', Validators.required),
      paymentStreet: new FormControl(''),
      paymentWard: new FormControl(''),
      paymentDistrict: new FormControl(''),
      paymentCity: new FormControl(''),
      paymentBang: new FormControl(''),
      paymentCountry: new FormControl(''),
      deliveryStreet: new FormControl(''),
      deliveryWard: new FormControl(''),
      deliveryDistrict: new FormControl(''),
      deliveryCity: new FormControl(''),
      deliveryBang: new FormControl(''),
      deliveryCountry: new FormControl(''),
    })
  }

  public applyForm(): void {
    const params = {
      firstName: this.form.controls['firstName']?.value,
      lastName: this.form.controls['lastName']?.value,
      gender: this.form.controls['gender']?.value,
      email: this.form.controls['email']?.value,
      numberPhone: this.form.controls['numberPhone']?.value,
      priceGroup: this.form.controls['priceGroup']?.value,
      paymentStreet: this.form.controls['paymentStreet']?.value,
      paymentWard: this.form.controls['paymentWard']?.value,
      paymentDistrict: this.form.controls['paymentDistrict']?.value,
      paymentCity: this.form.controls['paymentCity']?.value,
      paymentBang: this.form.controls['paymentBang']?.value,
      paymentCountry: this.form.controls['paymentCountry']?.value,
      deliveryStreet: this.form.controls['deliveryStreet']?.value,
      deliveryWard: this.form.controls['deliveryWard']?.value,
      deliveryDistrict: this.form.controls['deliveryDistrict']?.value,
      deliveryCity: this.form.controls['deliveryCity']?.value,
      deliveryBang: this.form.controls['deliveryBang']?.value,
      deliveryCountry: this.form.controls['deliveryCountry']?.value
    }
    this.updateBasicInformation(params)
  }

  public updateBasicInformation(params: any) {
    debugger
    this.customerService.addCustomer(params).subscribe((data) => {
      this.toast.success('Add new customer success')
      this.router.navigateByUrl('/customer-management')
    })

  }
  public resetInformation() {

  }
}
