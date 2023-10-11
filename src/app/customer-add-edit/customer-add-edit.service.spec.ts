import { TestBed } from '@angular/core/testing';

import { CustomerAddEditService } from './customer-add-edit.service';

describe('CustomerAddEditService', () => {
  let service: CustomerAddEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAddEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
