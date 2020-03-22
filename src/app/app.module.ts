import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartphoneListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
