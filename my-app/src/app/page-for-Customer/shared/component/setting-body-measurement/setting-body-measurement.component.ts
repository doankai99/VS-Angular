import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/customer-management/shared/customer.service';

@Component({
  selector: 'app-setting-body-measurement',
  templateUrl: './setting-body-measurement.component.html',
  styleUrls: ['./setting-body-measurement.component.less']
})
export class SettingBodyMeasurementComponent {
  public customerId: string = '';

  public form !: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService:
      CustomerService,
    private toast: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerId = params['id'];
    });

    this.setForm()
  }

  private setForm(): void {
    this.form = new FormGroup({
      gender: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      chest: new FormControl('', Validators.required),
      waist: new FormControl('', Validators.required),
      hips: new FormControl('', Validators.required),
    })
  }

  public bodyMeasurementCustomer(): void {
    const params = {
      gender: this.form.controls['gender']?.value,
      height: this.form.controls['height']?.value,
      weight: this.form.controls['weight']?.value,
      chest: this.form.controls['chest']?.value,
      waist: this.form.controls['waist']?.value,
      hips: this.form.controls['hips']?.value,
    }
    this.addBodyMeasuremment(params);
  }

  public addBodyMeasuremment(params: any): void {
    const id = this.customerId;
    this.customerService.createBodymeasurement(id, params).subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('/login')
        this.toast.success('Wellcome VestScraft')
      } else {
        this.toast.error('create body measurement false')
      }
    })
  }
}
