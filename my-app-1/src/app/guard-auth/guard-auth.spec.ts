import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuardAuth } from './guard-auth';

describe('GuardAuth', () => {
  let component: GuardAuth;
  let fixture: ComponentFixture<GuardAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardAuth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
