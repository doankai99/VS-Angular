import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  public date !: Date;
  public time: any = { hours: 0, minutes: 0, seconds: 0 };

  constructor() { }

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000); // Cập nhật mỗi 1 giây (1000 milliseconds)
  }

  public updateDateTime() {
    this.date = new Date();
    this.time.hours = new Date().getHours();
    this.time.minutes = new Date().getMinutes();
    this.time.seconds = new Date().getSeconds();
  }
}
