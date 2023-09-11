import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.less']
})
export class DetailUserComponent {
  public isOpen = false;
  @Input() public getDetailUser !: any;
  @Input() public userId !: string;

  constructor() {

  }

  ngOnInit() {
    this.getDetailUsers()
  }

  toggleDetailUser() {
    this.isOpen = !this.isOpen;
  }

  public getDetailUsers() {

  }
}
