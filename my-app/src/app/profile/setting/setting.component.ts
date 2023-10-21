import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent {
  public userId: any;
  constructor() { }

  ngOninit() {
    this.userId = localStorage.getItem('id')
    console.log(this.userId);

  }
}
