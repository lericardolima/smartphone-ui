import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneListComponent } from './smartphone-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SmartphoneListComponent', () => {
  let component: SmartphoneListComponent;
  let fixture: ComponentFixture<SmartphoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ SmartphoneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
