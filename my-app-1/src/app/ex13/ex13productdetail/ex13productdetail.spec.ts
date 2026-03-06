import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13productdetail } from './ex13productdetail';

describe('Ex13productdetail', () => {
  let component: Ex13productdetail;
  let fixture: ComponentFixture<Ex13productdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex13productdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex13productdetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
