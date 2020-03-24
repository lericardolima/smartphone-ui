import { TestBed } from '@angular/core/testing';

import { SmartphoneService } from './smartphone.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SmartphoneService', () => {
  let service: SmartphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SmartphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
