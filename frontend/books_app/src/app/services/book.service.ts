import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders() {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getBooks(page: number = 1, perPage: number = 10, title: string = '', author: string = ''): Observable<any> {
    const headers = this.getAuthHeaders();
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString())
      .set('title', title)
      .set('author', author);

    return this.http.get<any[]>(`${this.apiUrl}/books`, { headers, params });
  }

  getBook(id: number) {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.apiUrl}/books/${id}`, { headers });
  }

  createBook(book: any) {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(`${this.apiUrl}/books`, book, { headers });
  }

  updateBook(id: number, book: any) {
    const headers = this.getAuthHeaders();
    return this.http.put<any>(`${this.apiUrl}/books/${id}`, book, { headers });
  }

  deleteBook(id: number) {
    const headers = this.getAuthHeaders();
    return this.http.delete<any>(`${this.apiUrl}/books/${id}`, { headers });
  }
}
