import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';



@NgModule({
  declarations: [SmartphoneComponent, SmartphoneListComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    SmartphoneComponent,
    SmartphoneListComponent,
  ]
})
export class SmartphoneModule { }
