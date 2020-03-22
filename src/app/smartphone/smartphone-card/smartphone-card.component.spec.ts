import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneCardComponent } from './smartphone-card.component';

describe('SmartphoneCardComponent', () => {
  let component: SmartphoneCardComponent;
  let fixture: ComponentFixture<SmartphoneCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
