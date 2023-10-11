import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/page-for-Customer/contact-us/shared/appointment.service';

@Component({
  selector: 'app-cancel-appoinment',
  templateUrl: './cancel-appoinment.component.html',
  styleUrls: ['./cancel-appoinment.component.less']
})
export class CancelAppoinmentComponent {
  public cancelAppointment: any;
  public currentPage: number = 1;
  public pageSize: number = 3;

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
    if (this.currentPage * this.pageSize < this.cancelAppointment.length) {
      this.currentPage++;
    }
  }

  public handleDataAppointment(): void {
    this.appointmentService.handleDataAppointment().subscribe((data) => {
      if (data.appointmentClose) {
        this.cancelAppointment = data.appointmentClose
      } else {
        this.toast.warning('appointment not found')
      }
    })
  }
}
