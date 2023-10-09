import { Component } from '@angular/core';
import { AppointmentService } from '../../contact-us/shared/appointment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-booked-appointment',
  templateUrl: './list-booked-appointment.component.html',
  styleUrls: ['./list-booked-appointment.component.less']
})
export class ListBookedAppointmentComponent {

  public appointment: any;
  public customerId: any;
  public dateAppointment !: boolean;
  public dateTime = 'yyyy MMM dd - HH:mm'
  constructor(private appointmentService: AppointmentService, private toast: ToastrService) {

  }
  ngOnInit() {
    this.customerId = localStorage.getItem('id');
    this.getAppointment();

  }
  public checkStatusAppointment(status: number) {
    if (status !== 0) {
      return true
    } else {
      return false
    }
  }

  public getAppointment(): void {
    const id = this.customerId;
    this.appointmentService.getBookAppointment(id).subscribe((data) => {
      if (data) {
        this.appointment = data.appointment
      } else {
        this.toast.warning('You are not logged in')
      }
    })
  }

  public isCurrentTimeBeforeAppointment(date: any): boolean {
    const currentDate = new Date();
    // Kiểm tra xem date có phải là một đối tượng Date hợp lệ không
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      // Nếu không phải, hãy thử chuyển đổi date thành đối tượng Date
      date = new Date(date);
    }
    if (currentDate.getTime() < date.getTime()) {
      this.dateAppointment = true;
    } else {
      this.dateAppointment = false;
    }

    return this.dateAppointment;
  }

  public deleteAppointent(id: any): void {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.toast.success(`delete appointment ${id} success`)
      this.getAppointment();
    }, () => {
      this.toast.error(`delete appointment ${id} false`)
    })
  }

  public updateStatusAppointment(id: any): void {
    this.appointmentService.updateStatusAppointment(id).subscribe(() => {
      this.toast.success('Update status appointment success')
      this.getAppointment();
    }, () => {
      this.toast.error('update status apppointment false')
    })
  }
}
