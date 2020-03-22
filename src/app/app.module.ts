import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartphoneModule } from './smartphone/smartphone.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SmartphoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
