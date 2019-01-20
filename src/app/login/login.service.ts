import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user.model';
import { HttpClient } from '@angular/common/http';
import { ticket } from 'src/app/tickets.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ticket[]>
  { return this.http.get<ticket[]>('http://localhost:8080/api/tickets/AdminAccess/view');

  }
}
