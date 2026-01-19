import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogservice } from './catalogservice';

describe('Catalogservice', () => {
  let component: Catalogservice;
  let fixture: ComponentFixture<Catalogservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Catalogservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catalogservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
