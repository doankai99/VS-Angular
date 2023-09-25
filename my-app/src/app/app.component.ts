import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { GlobalConfig, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';

  public token = localStorage.getItem('id')
  constructor(private toastr: ToastrService) {
  }
}
