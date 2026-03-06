import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../check.validator';

@Component({
  selector: 'app-relative-course-registration',
  standalone: false,
  templateUrl: './relative-course-registration.html',
  styleUrl: './relative-course-registration.css',
})
export class RelativeCourseRegistration {
  regForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group(
      {
        password: ['', Validators.required],
        confirmPass: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  get password(): AbstractControl {
    return this.regForm.get('password')!;
  }

  get confirmPass(): AbstractControl {
    return this.regForm.get('confirmPass')!;
  }

  passwordMatchValidator(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPass')?.value;
    return pass === confirm ? null : { misMatch: true };
  }
}
