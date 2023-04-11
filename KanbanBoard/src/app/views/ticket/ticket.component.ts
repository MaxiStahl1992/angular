import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit{
  ticket: Ticket | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getTicket();
  }

  getTicket() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.getTicket(id)
      .subscribe(ticket => this.ticket = ticket)
  }

  goBack() {
    this.location.back();
  }
}
