import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.less']
})
export class CustomerOrderComponent {
  public isOpen: boolean = false;

  public form !: FormGroup;

  constructor() { }

  ngOnInit() { }

  public isOpenOrder() {
    this.isOpen = !this.isOpen
  }

  public createOrder() {

  }
}
