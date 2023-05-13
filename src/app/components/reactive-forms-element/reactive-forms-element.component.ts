import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-reactive-forms-element',
  templateUrl: './reactive-forms-element.component.html',
  styleUrls: ['./reactive-forms-element.component.scss']
})
export class ReactiveFormsElementComponent {
  email = new FormControl('');
}
