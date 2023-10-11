import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/page-for-Customer/contact-us/shared/appointment.service';

@Component({
  selector: 'app-appointment-active-inactive',
  templateUrl: './appointment-active-inactive.component.html',
  styleUrls: ['./appointment-active-inactive.component.less']
})
export class AppointmentActiveInactiveComponent {
  public activeAppointment: any;
  currentPage: number = 1;
  pageSize: number = 3;

  constructor(private appointmentService: AppointmentService, private toast: ToastrService) { }

  ngOnInit() {
    this.handleDataAppointment();
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.activeAppointment.length) {
      this.currentPage++;
    }
  }

  public handleDataAppointment(): void {
    this.appointmentService.handleDataAppointment().subscribe((data) => {
      if (data.appointmentActive) {
        this.activeAppointment = data.appointmentActive
      } else {
        this.toast.warning('appointment not found')
      }
    })
  }

  public changeStatusToDone(id: any) {
    this.appointmentService.updateStatusActiveToDone(id).subscribe((data) => {
      if (data) {
        this.toast.success('Change status appointment success')
      } else {
        this.toast.error(data.message);
      }
    })
  }
}
