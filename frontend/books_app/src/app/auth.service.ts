import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/books']);
    });
  }

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/register`, { name, email, password }).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/login']);
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return this.getToken() != null;
  }

  getAuthHeaders() {
    const token = this.getToken();
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }
}
