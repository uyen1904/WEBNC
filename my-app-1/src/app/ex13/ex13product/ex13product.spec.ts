import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13product } from './ex13product';

describe('Ex13product', () => {
  let component: Ex13product;
  let fixture: ComponentFixture<Ex13product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex13product]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex13product);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
