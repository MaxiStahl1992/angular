import { Component } from '@angular/core';
import { TICKETS } from '../../../db-data';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  tickets = TICKETS;
  swimLanes = ['backlog', 'desing', 'build/qa', 'sign-off', 'done'];
  backlog = [];
  design = [];
  build = [];
  signOff = [];
  done = [];

  sortTickets() {

  }

}
