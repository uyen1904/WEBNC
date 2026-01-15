import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lunaryear } from './lunaryear';

describe('Lunaryear', () => {
  let component: Lunaryear;
  let fixture: ComponentFixture<Lunaryear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lunaryear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lunaryear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
