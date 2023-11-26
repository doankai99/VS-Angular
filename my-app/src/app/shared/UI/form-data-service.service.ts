import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataServiceService {

  constructor() { }
  appendIfValue(formData: FormData, fieldName: string, value: any) {
    if (value) {
      formData.append(fieldName, value);
    }
  }
}
