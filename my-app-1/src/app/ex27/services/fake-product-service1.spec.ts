import { TestBed } from '@angular/core/testing';
import { FakeProductService1 } from './fake-product-service1';



describe('FakeProductService1', () => {
  let service: FakeProductService1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeProductService1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
