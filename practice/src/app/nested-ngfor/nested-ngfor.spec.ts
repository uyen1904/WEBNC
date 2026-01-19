import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNgfor } from './nested-ngfor';

describe('NestedNgfor', () => {
  let component: NestedNgfor;
  let fixture: ComponentFixture<NestedNgfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedNgfor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedNgfor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
