import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.less']
})
export class BarChartComponent {
  public chart: any;
  public totalOrder: number = 0

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.handleOrderDashboard();
  }
  public createChart(data: any) {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Lấy giá trị totalOrders từ data.dashboard và chuyển thành mảng
    const orderData = labels.map((label, index) => {
      const key = (index + 1).toString();
      return data.dashboard[key]?.totalOrders || 0;
    });

    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Order",
            data: orderData,
            backgroundColor: 'aqua'
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  public handleOrderDashboard() {
    this.dashboardService.orderDashboard().subscribe((data) => {
      this.totalOrder = data.total
      this.createChart(data)
    })
  }
}
