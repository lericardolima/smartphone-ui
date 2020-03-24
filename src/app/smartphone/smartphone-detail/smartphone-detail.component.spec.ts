import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneDetailComponent } from './smartphone-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SmartphoneDetailComponent', () => {
  let component: SmartphoneDetailComponent;
  let fixture: ComponentFixture<SmartphoneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ SmartphoneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
