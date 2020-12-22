import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(pageNumber: number): Observable<any>{
    let params = new HttpParams();
    params = params.set('page', pageNumber.toString());
    return this.http.get<any>(`${this.baseUrl}/users`, { params });
  }
}
