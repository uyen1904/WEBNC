import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionsDetail } from './fashions-detail';

describe('FashionsDetail', () => {
  let component: FashionsDetail;
  let fixture: ComponentFixture<FashionsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
