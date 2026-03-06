import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../check.validator';


@Component({
  selector: 'app-course-registration',
  standalone: false,
  templateUrl: './course-registration.html',
  styleUrl: './course-registration.css',
})
export class CourseRegistration {
  courses = ['Ruby', 'Python', 'Java', 'JavaScript', 'C++'];
  
  studentModel = {
    name: '',
    email: '',
    phone: '',
    course: 'none',
    time: '',
    agree: false
  };
  public regForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,           // Bắt buộc nhập
      Validators.minLength(3),       // Tối thiểu 3 ký tự
      customValidator(/\@|\#|\$|\%|\^|\*|\(|\)/)
    ]),
    email: new FormControl('', [
      Validators.required,           // Bắt buộc nhập
      Validators.email               // Phải đúng format email
    ]),
    // password: new FormControl('', [
    //   Validators.required
    // ]),
    // confirmPass: new FormControl('', [
    //   Validators.required
    // ])
  },
  // {
  // validators: passwordValidator  // ← Validator cho cả FormGroup
  // }
);

  // Getter để dễ truy cập controls
  get name() {
    return this.regForm.controls['name'];
  }

  get email() {
    return this.regForm.controls['email'];
  }

  // get password() {
  //   return this.regForm.controls['password'];
  // }

  // get confirmPass() {
  //   return this.regForm.controls['confirmPass'];
  // }

  ngOnInit() {
    // Cách 1: Set giá trị mặc định khi khởi tạo (đã có ở trên)
    
    // Cách 2: Set sau khi component load
    this.setDefaultValues();
  }

  setDefaultValues() {
    // patchValue: chỉ set một vài field
    this.regForm.patchValue({
      name: 'Thảo Uyên',
      email: 'uyendt@gmail.com'
    });
  }

  errFlag: boolean = false;

  validateCourse(value: any): void {
    if (value === 'none') {
      this.errFlag = true;
    } else {
      this.errFlag = false;
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.studentModel);
    alert('Đăng ký thành công!');
  }
}
