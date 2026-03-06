import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitCoinPriceIndex } from './bit-coin-price-index';

describe('BitCoinPriceIndex', () => {
  let component: BitCoinPriceIndex;
  let fixture: ComponentFixture<BitCoinPriceIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BitCoinPriceIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitCoinPriceIndex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
