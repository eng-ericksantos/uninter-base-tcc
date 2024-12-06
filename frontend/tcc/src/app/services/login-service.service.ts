import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';
import { LoginResponse } from '../models/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  logIn(payload: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/auth/login', payload);
  }
}
