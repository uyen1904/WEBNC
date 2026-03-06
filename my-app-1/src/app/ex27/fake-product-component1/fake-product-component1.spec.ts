import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeProductComponent1 } from './fake-product-component1';

describe('FakeProductComponent1', () => {
  let component: FakeProductComponent1;
  let fixture: ComponentFixture<FakeProductComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeProductComponent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeProductComponent1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
