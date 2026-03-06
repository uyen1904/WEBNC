import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFailed } from './login-failed';

describe('LoginFailed', () => {
  let component: LoginFailed;
  let fixture: ComponentFixture<LoginFailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFailed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFailed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
