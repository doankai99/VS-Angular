import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  @Output() image: any;

  ngOnInit() {
    this.image = localStorage.getItem('image');
  }
}
