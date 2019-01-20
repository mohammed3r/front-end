
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {  }

  getAll(): Observable<User[]>
  { return this.http.get<User[]>('/api/users/AdminAccess/view')}
}
