import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAPIService } from '../myservices/login-apiservice';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private _service: LoginAPIService, private router: Router) {}
  doLogin() {
    this._service.login(this.username, this.password).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/ex53']);
        } else {
          this.router.navigate(['/login-failed']);
        }
      },
      error: (err: any) => console.log(err)
    });
  }
}
