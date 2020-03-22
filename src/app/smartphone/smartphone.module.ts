import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphoneCardComponent } from './smartphone-card/smartphone-card.component';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SmartphoneDetailComponent } from './smartphone-detail/smartphone-detail.component';
import { SmartphoneRoutingModule } from './smartphone-routing.module';
import { SmartphoneComponent } from './smartphone.component';

@NgModule({
  declarations: [SmartphoneListComponent, SmartphoneCardComponent, SmartphoneDetailComponent, SmartphoneComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    SmartphoneRoutingModule,
  ],
  exports: [
    SmartphoneComponent
  ]
})
export class SmartphoneModule { }
