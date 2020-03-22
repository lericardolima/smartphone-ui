import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphoneDetailComponent } from './smartphone-detail/smartphone-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SmartphoneListComponent,
  },
  {
    path: 'details',
    component: SmartphoneDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class SmartphoneRoutingModule { }
