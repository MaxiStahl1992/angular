import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from '../../services/ticket.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  swimLanes: string[] = ['backlog', 'ready', 'progress', 'test', 'done']
  backlog: Ticket[] = [];
  ready: Ticket[] = [];
  progress: Ticket[] = [];
  test: Ticket[] = [];
  done: Ticket[] = [];

  
  constructor(private ticketService: TicketService) {}
  
  ngOnInit() {
    this.sortTickets();
  }

  sortTickets(): void {
    this.ticketService.getTickets().subscribe(tickets => {
      for(let ticket of tickets) {
        switch (ticket.status) {
          case 'backlog': 
            this.backlog.push(ticket)
            break;
          case 'ready': 
            this.ready.push(ticket)
            break;
          case 'progress': 
            this.progress.push(ticket)
            break;
          case 'test': 
            this.test.push(ticket)
            break;
          case 'done': 
            this.done.push(ticket)
            break;
          default:
            break;
        }
      }
    })
  }

  drop(event: CdkDragDrop<Ticket[]>) {
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }
  }
}
