import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {
  public activeTab: string = 'A';
  public Form !: FormGroup;

  public constructor() { }

  public ngOnInit() {

  }

  public updateProfile() {

  }
}
