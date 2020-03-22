import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SmartphoneCardComponent } from './smartphone-card/smartphone-card.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [SmartphoneComponent, SmartphoneListComponent, SmartphoneCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [
    SmartphoneComponent,
    SmartphoneListComponent,
  ]
})
export class SmartphoneModule { }
