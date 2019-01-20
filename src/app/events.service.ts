import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from 'src/app/events.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) {  }

  getAll(): Observable<Events[]>{ 
    return this.http.get<Events[]>('/api/events/AdminAccess/view');
}
}



