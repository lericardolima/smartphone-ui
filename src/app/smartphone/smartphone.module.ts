import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphoneCardComponent } from './smartphone-card/smartphone-card.component';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SmartphoneComponent, SmartphoneListComponent, SmartphoneCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [
    SmartphoneComponent,
    SmartphoneListComponent,
  ]
})
export class SmartphoneModule { }
