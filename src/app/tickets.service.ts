import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user.model';
import { HttpClient } from '@angular/common/http';
import { ticket } from 'src/app/tickets.model';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<ticket[]>
  { return this.http.get<ticket[]>('/api/tickets/AdminAccess/view');
}
}
