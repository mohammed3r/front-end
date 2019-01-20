import { Component, OnInit } from '@angular/core';
import { ticket } from 'src/app/tickets.model';
import { TicketsService } from 'src/app/tickets.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
tickets:ticket[];
  constructor(private ticketService: TicketsService) { }

  ngOnInit() {
    this.ticketService.getAll().subscribe(
      value => this.tickets = value);
    
  }

}
