import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  pageNumber = 1;
  totalPages: number;
  users$ = new Subject();
  baseUrl = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<any> {
    let params = new HttpParams();
    params = params.set('page', this.pageNumber.toString());
    return this.http.get<any>(`${this.baseUrl}`, { params }).pipe(
      map(
        (res) => ({
          total_pages: res.total_pages,
          users: res.data.map((user: any) => ({
            id: user.id,
            avatar: user.avatar,
            email: user.email,
            name: `${user.first_name} ${user.last_name}`
          }))
        })
      )
    );
  }

  storeUsers(): void {
    this.getUsers().subscribe(
      (res) => {
        this.users = this.pageNumber === 1 ? res.users as User[] : [...this.users, ...res.users as User[]];
        this.totalPages = res.total_pages;
        this.users$.next();
      },
      (err) => this.users$.error(err)
    );
  }

  getUserDetails(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}`).pipe(
      map((res: any) => ({
        id: res.data.id,
        avatar: res.data.avatar,
        email: res.data.email,
        name: `${res.data.first_name} ${res.data.last_name}`
      }))
    );
  }

  createUseR(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, user);
  }

  editUser(user: User): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${userId}`);
  }

}
