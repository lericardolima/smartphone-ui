import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneFormComponent } from './smartphone-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SmartphoneFormComponent', () => {
  let component: SmartphoneFormComponent;
  let fixture: ComponentFixture<SmartphoneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:
        [
          ReactiveFormsModule,
          FormsModule,
          HttpClientTestingModule,
          RouterTestingModule,
          MatSnackBarModule,
          MatSelectModule,
          MatInputModule,
          BrowserAnimationsModule
        ],
      declarations: [SmartphoneFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
