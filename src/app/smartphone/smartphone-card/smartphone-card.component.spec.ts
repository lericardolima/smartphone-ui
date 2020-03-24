import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneCardComponent } from './smartphone-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SmartphoneCardComponent', () => {
  let component: SmartphoneCardComponent;
  let fixture: ComponentFixture<SmartphoneCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
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
