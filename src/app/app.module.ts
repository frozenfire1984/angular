import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru'


import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import { FormComponent } from './form/form.component'

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
