import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth/shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {
  public activeTab: string = 'A';
  public Form !: FormGroup;
  public userInfo: any;
  public userId = localStorage.getItem('id');

  public constructor(private authService: AuthService) { }

  public ngOnInit() {
    this.detailProfile();
  }

  public detailProfile() {
    const id = this.userId;
    this.authService.detailUser(id).subscribe((data) => {
      this.userInfo = data.message
      console.log(this.userInfo);

    })
  }
}
