import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from '../../services/ticket.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  swimLanes: string[] = ['backlog', 'ready', 'in progress', 'test', 'done']
  tickets: Ticket[] = [];
  backlogTickets: Ticket[] = [];
  
  constructor(private ticketService: TicketService) {}
  
  ngOnInit() {
    this.getTickets();
    this.sortTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets().subscribe(tickets => this.tickets = tickets);
  }

  sortTickets(): void {
    this.ticketService.getTickets().subscribe(tickets => {
      for(let ticket of tickets) {
        switch (ticket.status) {
          case 'backlog': 
            this.backlogTickets.push(ticket)
            break;
          default:
            break;
        }
      }
    })
  }


}
