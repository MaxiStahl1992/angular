import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from '../../services/ticket.service';
import { Observable } from 'rxjs';
import { MemberService } from '../../services/member.service';
import { Member } from 'src/app/model/member';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  tickets: Ticket[] = [];
  members: Member[] = [];

  constructor(private ticketService: TicketService, private memberService: MemberService) {}
  
  ngOnInit() {
    this.getTickets();
    this.getMembers();
  }

  getTickets(): void {
    this.ticketService.getTickets().subscribe(tickets => this.tickets = tickets);
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe(members => this.members = members)
  }

}
