import { AbstractControl, ValidatorFn } from '@angular/forms';

export function customValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key:string]:any} | null => {
    const matchName = regex.test(control.value);
    return matchName ? {'nameNotMatch': {value: control.value}} : null;
  };
}
export function passwordValidator(control: AbstractControl): any {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPass');
  
  // Nếu chưa nhập gì thì không validate
  if ((password && password.pristine) || (confirmPassword && confirmPassword.pristine)) {
    return null;
  }
  
  // So sánh 2 mật khẩu
  return password && confirmPassword && password.value !== confirmPassword.value 
    ? {'misMatch': true}   // Không khớp → lỗi
    : null;                // Khớp → hợp lệ
}