import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphoneDetailComponent } from './smartphone-detail/smartphone-detail.component';
import { SmartphoneFormComponent } from './smartphone-form/smartphone-form.component';

const routes: Routes = [
  {
    path: '',
    component: SmartphoneListComponent,
  },
  {
    path: 'details',
    component: SmartphoneDetailComponent
  },
  {
    path: 'new',
    component: SmartphoneFormComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class SmartphoneRoutingModule { }
