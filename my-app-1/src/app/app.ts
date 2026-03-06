import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app-1');
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  
  logout() {
    localStorage.removeItem('isLoggedIn'); 
    this.router.navigate(['/login']); 
  }}
