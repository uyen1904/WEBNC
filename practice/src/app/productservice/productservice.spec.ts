import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productservice } from './productservice';

describe('Productservice', () => {
  let component: Productservice;
  let fixture: ComponentFixture<Productservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Productservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
