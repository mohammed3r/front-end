import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/events.model';
import { EventsService } from 'src/app/events.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events$: Events[];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getAll().subscribe(
    value => this.events$ = value
    );

  }

}

