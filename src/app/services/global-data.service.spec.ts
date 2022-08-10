import { TestBed } from '@angular/core/testing';

import { GlobalDataServicesService } from './global-data-services.service';

describe('GlobalDataServicesService', () => {
  let service: GlobalDataServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDataServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
