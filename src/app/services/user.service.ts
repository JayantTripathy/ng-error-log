import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<any>(url);
  }
  public getUsers1(): Observable<any> {
    const url = 'https://xyz.in/api/users?page=1';
    return this.http.get<any>(url);
  }
}
