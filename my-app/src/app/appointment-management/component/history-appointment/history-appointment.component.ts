import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/page-for-Customer/contact-us/shared/appointment.service';

@Component({
  selector: 'app-history-appointment',
  templateUrl: './history-appointment.component.html',
  styleUrls: ['./history-appointment.component.less']
})
export class HistoryAppointmentComponent {
  public appointmentDone: any;
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
    if (this.currentPage * this.pageSize < this.appointmentDone.length) {
      this.currentPage++;
    }
  }

  public handleDataAppointment(): void {
    this.appointmentService.handleDataAppointment().subscribe((data) => {
      if (data.appointmentClose) {
        this.appointmentDone = data.appointmentDone
      } else {
        this.toast.warning('appointment not found')
      }
    })
  }

}
