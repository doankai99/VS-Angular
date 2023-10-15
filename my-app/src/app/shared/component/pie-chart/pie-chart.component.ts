import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.less']
})
export class PieChartComponent {
  public chart: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.handleDataPieChart()
  }

  public createChart(data: any) {
    this.chart = new Chart("pieChart", {
      type: 'pie',
      // type: 'doughnut',
      data: {
        labels: [
          'close',
          'inactive',
          'active',
          'Doing',
          'Delivery',
          'Done'
        ],
        datasets: [{
          label: 'Summary of order data (2023)',
          data: [data.orderClose, data.orderInactive, data.orderActive, data.orderDoing, data.orderDelivery, data.orderDone],
          backgroundColor: [
            '#eb2a2a',
            'rgb(153, 102, 255)',
            '#95f542',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            '#0c5207',
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 2.5,
      }
    });
  }

  public handleDataPieChart(): void {
    this.dashboardService.pieChartDataOrder().subscribe((data) => {
      this.createChart(data);
    })
  }
}
