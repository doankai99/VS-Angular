import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-body-measurements',
  templateUrl: './add-body-measurements.component.html',
  styleUrls: ['./add-body-measurements.component.less']
})
export class AddBodyMeasurementsComponent {
  public isOpen: boolean = false;

  public form !: FormGroup;

  constructor() { }

  public OnInit() { }

  public addBodyMeasurements() {

  }
}
