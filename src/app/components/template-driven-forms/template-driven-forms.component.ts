import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent {
  name: string | undefined;
  email: string | undefined;
  age: number | undefined;
  preference: string | undefined;
  preferences: string[] = ['Cooking', 'Reading', 'Coding'];
  onSubmit(form: NgForm) {
    console.log(form)
    console.log(form.value)
    console.log('form: ', this.name);
    console.log('form: ', this.email);
    console.log('form: ', this.age);
    console.log('form: ', this.preference);
  }
}
