import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeCourseRegistration } from './relative-course-registration';

describe('RelativeCourseRegistration', () => {
  let component: RelativeCourseRegistration;
  let fixture: ComponentFixture<RelativeCourseRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelativeCourseRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelativeCourseRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
