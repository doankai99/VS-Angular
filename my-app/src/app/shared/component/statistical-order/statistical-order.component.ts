import { Component } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-statistical-order',
  templateUrl: './statistical-order.component.html',
  styleUrls: ['./statistical-order.component.less']
})
export class StatisticalOrderComponent {
  public totalOrder: number = 0;
  public totalCustomer: number = 0;
  public totalAppointment: number = 0;
  public totalCountOrder: number = 0;

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.handleStatistical()
  }

  public handleStatistical(): void {
    this.dashboardService.handleStatistical().subscribe((data) => {
      if (data) {
        console.log(data);
        this.totalOrder = data.totalOrder
        this.totalCustomer = data.totalCustomer
        this.totalAppointment = data.totalAppointment
        this.totalCountOrder = data.totalCountOrder
      }
    })
  }
}
