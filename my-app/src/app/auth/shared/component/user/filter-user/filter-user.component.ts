import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-user',
  templateUrl: './filter-user.component.html',
  styleUrls: ['./filter-user.component.less']
})
export class FilterUserComponent {
  public isOpen = false;
  public form !: FormGroup;

  @Output() public fetchData: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.setForm();
  }

  public toggleDetailUser() {
    this.isOpen = !this.isOpen
  }

  public setForm() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      ward: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    })
  }

  public handleFilterUser() {
    const params = {
      email: this.form.controls['email']?.value,
      password: this.form.controls['password']?.value,
      firstname: this.form.controls['firstname']?.value,
      lastname: this.form.controls['lastname']?.value,
      position: this.form.controls['position']?.value,
      street: this.form.controls['street']?.value,
      ward: this.form.controls['ward']?.value,
      district: this.form.controls['district']?.value,
      city: this.form.controls['city']?.value,
      country: this.form.controls['country']?.value
    }
    this.clean(params)
    this.fetchData.emit(params);
  }

  public clean(param: any) {
    for (const propName in param) {
      if (typeof param[propName] === 'string') {
        param[propName] = param[propName].trim();
      }
      if (param[propName] === null || param[propName] === "") {
        delete param[propName];
      }
    }
    return param;
  }
}
