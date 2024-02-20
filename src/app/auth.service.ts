// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Simulated login method
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      // Set user as logged in using local storage
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  // Method to check if user is logged in
  isLoggedIn(): boolean {
    // Check if 'loggedIn' flag is set in local storage
    return localStorage.getItem('loggedIn') === 'true';
  }

  // Method to log out user
  logout(): void {
    // Remove 'loggedIn' flag from local storage
    localStorage.removeItem('loggedIn');
  }
}
