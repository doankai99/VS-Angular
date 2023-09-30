import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from './shared/appointment.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent {
  public form !: FormGroup;

  public customerId: any;

  constructor(private appointmentService: AppointmentService, private toast: ToastrService, private router: Router) {

  }

  ngOnInit() {
    this.customerId = localStorage.getItem('id');
    this.setForm();
  }

  public setForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
      area: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
    })
  }

  public bookAppointment(): void {
    const params = {
      name: this.form.controls['name']?.value,
      phone: this.form.controls['phone']?.value,
      email: this.form.controls['email']?.value,
      date: this.form.controls['date']?.value,
      time: this.form.controls['time']?.value,
      area: this.form.controls['area']?.value,
      city: this.form.controls['city']?.value,
      state: this.form.controls['state']?.value,
      country: this.form.controls['country']?.value
    }
    this.addAppointment(params);
  }

  public addAppointment(params: any) {
    const id = this.customerId;
    this.appointmentService.bookAppointment(params, id).subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('/customer-profile')
        this.toast.success('You are booked appointment success')
      } else {
        this.toast.error('sorry, you booked appointment false')
      }
    })
  }

}
