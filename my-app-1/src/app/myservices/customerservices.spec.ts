import { TestBed } from '@angular/core/testing';

import { Customerservices } from './customerservices';

describe('Customerservices', () => {
  let service: Customerservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Customerservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
