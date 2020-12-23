import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_URL } from './../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(AUTH_URL, credentials);
  }

}
