import { TestBed } from '@angular/core/testing';
import { Bitcoinservice } from './bitcoinservice';



describe('Bitcoinservice', () => {
  let service: Bitcoinservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bitcoinservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
