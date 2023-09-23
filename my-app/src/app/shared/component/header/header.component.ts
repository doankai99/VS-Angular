import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  public image: any;

  ngOnInit() {
    this.image = localStorage.getItem('image');
    console.log(this.image);

  }
}
