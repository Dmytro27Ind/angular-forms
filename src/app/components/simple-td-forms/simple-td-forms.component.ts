import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-simple-td-forms',
  templateUrl: './simple-td-forms.component.html',
  styleUrls: ['./simple-td-forms.component.scss']
})
export class SimpleTdFormsComponent {
  submitForm(form: NgForm) {
    console.log(form.value)
    form.reset()
  }
}
