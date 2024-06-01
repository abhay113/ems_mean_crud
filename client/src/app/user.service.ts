import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUri: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUri}/getAll`);
  }

  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUri}/create`, userData);
  }

  updateUser(userId: string, userData: any): Observable<any> {
    return this.http.patch(`${this.apiUri}/update/${userId}`, userData);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUri}/delete/${userId}`);
  }
}
