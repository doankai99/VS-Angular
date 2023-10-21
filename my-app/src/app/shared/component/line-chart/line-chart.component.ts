import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.less']
})
export class LineChartComponent {

  public charts: any;
  public totalCustomerMonth: any;
  public totalAppointmentMonth: any

  private customerDataReady = false;
  private appointmentDataReady = false;
  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.handleCustomerDashboard()
    this.handleAppointmentDashboard()
  }

  public createChart(customer: any, appointment: any) {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // Lấy giá trị totalOrders từ data.dashboard và chuyển thành mảng
    const customerData = labels.map((label, index) => {
      const key = (index + 1).toString();
      return customer?.dashboard[key]?.totalOrders || 0;
    });

    const appointmentData = labels.map((label, index) => {
      const key = (index + 1).toString();
      return appointment?.dashboard[key]?.totalOrders || 0;
    });

    this.charts = new Chart("LineChart", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Customer",
            data: customerData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: "Appointment",
            data: appointmentData,
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(54, 162, 235)',
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  public handleCustomerDashboard(): void {
    this.dashboardService.customerDashboard().subscribe((data) => {
      this.totalCustomerMonth = data
      this.customerDataReady = true;
      this.tryCreateChart();
    })
  }

  public handleAppointmentDashboard(): void {
    this.dashboardService.appointmentDashboard().subscribe((data) => {
      this.totalAppointmentMonth = data
      this.appointmentDataReady = true;
      this.tryCreateChart();
    })
  }
  private tryCreateChart() {
    // Kiểm tra xem cả hai API calls đã hoàn thành chưa
    if (this.customerDataReady && this.appointmentDataReady) {
      this.createChart(this.totalCustomerMonth, this.totalAppointmentMonth);
    }
  }
}
