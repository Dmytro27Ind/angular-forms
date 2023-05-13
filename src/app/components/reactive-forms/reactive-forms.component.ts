import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  reactiveForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    age: new FormControl('', [
      Validators.required,
      Validators.max(99),
      Validators.min(18)
    ]),
  });

  onSubmit() {
    console.log(this.reactiveForm)
    console.log(this.reactiveForm.value)
  }
}
