import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SimpleTdFormsComponent } from './components/simple-td-forms/simple-td-forms.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsElementComponent } from './components/reactive-forms-element/reactive-forms-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTdFormsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ReactiveFormsElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
